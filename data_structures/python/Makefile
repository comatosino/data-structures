.PHONY: test

VENV := .venv
PY := $(VENV)/bin/python3
PIP := $(PY) -m pip

install: .venv
	@$(PIP) install -r requirements.txt

main:
	@python3 main.py
	
test: .venv
	@$(PY) -m pytest -v
