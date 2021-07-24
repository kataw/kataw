# Kataw parser test case

## Input

`````js
export opaque potato: FBID = number;
`````

## Options

### Parser Options

`````js
{ allowTypes : true, module: true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "potato",
                "rawText": "potato",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 20
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 20,
                "end": 21
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "FBID",
                        "rawText": "FBID",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 26
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 28
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 35
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 21,
                    "end": 35
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 21,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 36
        }
    ],
    "isModule": true,
    "source": "export opaque potato: FBID = number;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' is not allowed here. Did you mean ';'? - start: 13, end: 20
✖ Declaration or statement expected - start: 13, end: 20

```

