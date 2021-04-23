# Kataw parser test case

## Input

`````js
({
    constructor(this: number){}
})
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 18
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 19,
                                    "end": 23
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 19,
                                        "end": 19
                                    },
                                    "flags": 256,
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 256,
                                "start": 18,
                                "end": 19
                            },
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 134299649,
                                    "text": "number",
                                    "rawText": "number",
                                    "flags": 768,
                                    "start": 24,
                                    "end": 31
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "this",
                                    "rawText": "this",
                                    "flags": 768,
                                    "start": 19,
                                    "end": 23
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 31
                            }
                        ],
                        "trailingComma": false,
                        "multiline": true,
                        "flags": 0,
                        "start": 2,
                        "end": 31
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 31
                },
                "flags": 256,
                "start": 0,
                "end": 32
            },
            "flags": 128,
            "start": 0,
            "end": 32
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 33,
                "end": 33
            },
            "flags": 128,
            "start": 32,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "({\n    constructor(this: number){}\n})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

