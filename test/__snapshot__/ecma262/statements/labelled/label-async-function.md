# Kataw parser test case

## Input

`````js
label: async function () {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "label",
                "rawText": "label",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 6
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 12
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 21
                },
                "asteriskToken": null,
                "name": null,
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 23
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 27
                },
                "returnType": null,
                "flags": 144,
                "transformFlags": 0,
                "start": 6,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "label: async function () {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 6, end: 12
✖ Binding identifier expected - start: 21, end: 23

```

