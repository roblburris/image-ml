from sys import argv, exit

if len(argv) < 2:
	try:
		sys.exit()
	except SystemExit:
		print("Error exiting, time to die")

filename = argv[1]

# Do random ml calculation

print(f"Label for {filename}: ml generated label")