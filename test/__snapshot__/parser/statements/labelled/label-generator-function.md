# Kataw parser test case

## Input

`````js
label: function * x (){}
`````

## Output

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 6,
                    "start": 0,
                    "end": 15
                },
                "generatorToken": {
                    "kind": 67143222,
                    "flags": 15,
                    "start": 512,
                    "end": 17
                },
                "name": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 17,
                    "end": 19
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 19,
                    "end": 22
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 23,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 24
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 2176,
                "start": 6,
                "end": 24
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "label: function * x (){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Generators can only be declared at the top level or inside a block - start: 17, end: 19

```

