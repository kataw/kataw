# Kataw parser test case

## Input

`````js
label: function * x (){}
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
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 15
                },
                "asteriskToken": {
                    "kind": 201360950,
                    "flags": 64,
                    "transformFlags": 32,
                    "start": 15,
                    "end": 17
                },
                "name": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 21
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 23
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 24
                },
                "returnType": null,
                "flags": 272,
                "transformFlags": 0,
                "start": 6,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "label: function * x (){}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Generators can only be declared at the top level or inside a block - start: 17, end: 19

```

