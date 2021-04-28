# Kataw parser test case

## Input

`````js
a=function<T,S>() {}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 2
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 768,
                        "start": 2,
                        "end": 10
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 15,
                        "end": 17
                    },
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
                        "start": 17,
                        "end": 20
                    },
                    "typeParameters": {
                        "kind": 146,
                        "types": [
                            {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 768,
                                    "start": 11,
                                    "end": 12
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 11,
                                "end": 12
                            },
                            {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "S",
                                    "rawText": "S",
                                    "flags": 768,
                                    "start": 13,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 13,
                                "end": 14
                            }
                        ],
                        "flags": 0,
                        "start": 10,
                        "end": 15
                    },
                    "returnType": null,
                    "flags": 256,
                    "start": 2,
                    "end": 20
                },
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "a=function<T,S>() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

