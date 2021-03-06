import graphviz
import json

# Load source JSON
f_in = open('type-data.json')
poke_types = json.load(f_in)
f_in.close()

# Create Graph
graph_title = "Pokemon Types"

node_args = {
    'shape': 'circle',
    'style': 'filled',
    'width': '1',
    'fixedsize': 'true',
    'fontname': "Helvetica,Arial,sans-serif"
}

graph_args = {
    'layout': 'circo',
    'label': graph_title,
    'fontname': "Helvetica,Arial,sans-serif",
    # 'splines':'curved', # IMO this looks nicer, but doesn't work with .render()
    'mindist': '2'  # used for circo, specifies the minimum distance between nodes.
}

graph = graphviz.Digraph(graph_title, node_attr=node_args, graph_attr=graph_args)

# Make Nodes
for poke_type in poke_types['PokeTypes']:
    nodeName = poke_type["ref"]
    nodeLabel = poke_type["name"]
    nodeColor = poke_type["color"]
    graph.node(nodeName, nodeLabel, color=nodeColor)

# Make Edges
for poke_type in poke_types['PokeTypes']:
    # Super Effective
    for super_effective in poke_type["super-effective"]:
        graph.edge(poke_type["ref"], super_effective, color='green')

    # Not Effective
    for not_very_effective in poke_type["not-very-effective"]:
        graph.edge(poke_type["ref"], not_very_effective, color='red')

    # No Effect
    for no_effect in poke_type["no-effect"]:
        graph.edge(poke_type["ref"], no_effect, color='grey')

# Render as .png
# Also writes the source .gv file
graph.render(format='png', outfile='../out/type-chart.png').replace('\\', '/')
