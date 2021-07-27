# Kataw parser test case

## Input

`````js
if (foo) {}

if (foo) {
			// foo;
		} else {}


`````

## Options

### Parser Options

`````js
{ lint: { noDelete: true } }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 7
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 10
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 8,
                "end": 11
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 11,
                "end": 15
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 17,
                "end": 20
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 23
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 21,
                "end": 38
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 38,
                "end": 43
            },
            "alternate": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 45
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 43,
                "end": 46
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 11,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "if (foo) {}\n\nif (foo) {\n\t\t\t// foo;\n\t\t} else {}\n\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
if (foo) {}
if (foo) {// foo;
  }
else  {}

```

### Diagnostics

```javascript
✔ No errors
```

