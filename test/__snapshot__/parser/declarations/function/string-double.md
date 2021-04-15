# Kataw parser test case

## Input

`````js
function createElement(tagName: "div"): HTMLDivElement {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "createElement",
                "rawText": "createElement",
                "flags": 768,
                "start": 8,
                "end": 22
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "tagName",
                            "rawText": "tagName",
                            "flags": 768,
                            "start": 23,
                            "end": 30
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217967,
                                "value": "div",
                                "flags": 0,
                                "start": 31,
                                "end": 37
                            },
                            "flags": 0,
                            "start": 30,
                            "end": 37
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 23,
                        "end": 37
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 22,
                "end": 38
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 56,
                    "end": 56
                },
                "flags": 256,
                "start": 54,
                "end": 57
            },
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "HTMLDivElement",
                        "rawText": "HTMLDivElement",
                        "flags": 768,
                        "start": 39,
                        "end": 54
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 39,
                    "end": 54
                },
                "flags": 0,
                "start": 38,
                "end": 54
            },
            "flags": 128,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "text": "function createElement(tagName: \"div\"): HTMLDivElement {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

