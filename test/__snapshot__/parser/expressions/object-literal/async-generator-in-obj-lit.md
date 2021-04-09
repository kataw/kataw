# Kataw parser test case

## Input

`````js
const obj = {
    async,
    *generator() {
    }
};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 162,
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "value": "obj",
                            "autofix": 0,
                            "flags": 768,
                            "start": 5,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 81921,
                                        "value": "async",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 13,
                                        "end": 23
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "value": "generator",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 30,
                                            "end": 39
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 40,
                                            "end": 41
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "statements": [],
                                                "multiline": true,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 43,
                                                "end": 43
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 41,
                                            "end": 49
                                        },
                                        "autofix": 0,
                                        "flags": 1280,
                                        "start": 39,
                                        "end": 49
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "autofix": 0,
                                "flags": 1,
                                "start": 13,
                                "end": 49
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 11,
                            "end": 51
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 5,
                        "end": 51
                    }
                ],
                "autofix": 0,
                "flags": 160,
                "start": 5,
                "end": 51
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "const obj = {\n    async,\n    *generator() {\n    }\n};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

