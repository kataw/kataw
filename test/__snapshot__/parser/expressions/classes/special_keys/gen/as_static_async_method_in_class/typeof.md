# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as static async method in class
> :: case: typeof
## Input

`````js
class x {static async typeof(){}}
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
                                "text": "typeof",
                                "rawText": "typeof",
                                "flags": 768,
                                "start": 21,
                                "end": 28
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 2048,
                                "start": 29,
                                "end": 30
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
                                    "start": 31,
                                    "end": 31
                                },
                                "flags": 256,
                                "start": 30,
                                "end": 32
                            },
                            "flags": 2048,
                            "start": 28,
                            "end": 32
                        },
                        "flags": 256,
                        "start": 15,
                        "end": 32
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "class x {static async typeof(){}}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

