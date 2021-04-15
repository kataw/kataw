# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as static async generator in class
> :: case: arguments
## Input

`````js
class x {static async * arguments(){}}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 768,
                            "start": 9,
                            "end": 15
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "arguments",
                                "rawText": "arguments",
                                "flags": 768,
                                "start": 23,
                                "end": 33
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 3072,
                                "start": 34,
                                "end": 35
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
                                    "start": 36,
                                    "end": 36
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 37
                            },
                            "flags": 3072,
                            "start": 33,
                            "end": 37
                        },
                        "flags": 256,
                        "start": 15,
                        "end": 37
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 38
            },
            "flags": 128,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "class x {static async * arguments(){}}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

