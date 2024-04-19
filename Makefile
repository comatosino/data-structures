.PHONY: venv test

VENV := .venv
PY := $(VENV)/bin/python3
PIP := $(PY) -m pip

venv:
	@python3 -m venv .venv
	
test: .venv
	@$(PIP) install --upgrade pytest
	@$(PY) -m pytest -v

lint: .venv
	@$(PIP) install --upgrade pylint
	@$(PY) -m pylint algorithms data_structures --ignore-paths .venv

clean:
	@find . \
	\( -name .venv \
	-o -name __pycache__ \
	-o -name "*.pytest_cache" \
	\) -exec rm -rf {} +