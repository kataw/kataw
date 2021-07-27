# Kataw parser test case

## Input

`````js
*(x) => x
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 0
                },
                "operatorToken": {
                    "kind": 201360950,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 0,
                    "end": 1
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 3
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 4
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 7
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 9
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 9
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "*(x) => x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 0, end: 1
✖ ';' expected - start: 4, end: 7

```

