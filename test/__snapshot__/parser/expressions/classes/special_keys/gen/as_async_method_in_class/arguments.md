# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as async method in class
> :: case: arguments
## Input

`````js
class x {async arguments(){}}
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
                "kind": 37822544,
                "flags": 0,
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
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 9,
                            "start": 512,
                            "end": 14
                        },
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "arguments",
                                "rawText": "arguments",
                                "flags": 768,
                                "start": 14,
                                "end": 24
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 2048,
                                "start": 25,
                                "end": 26
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
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 256,
                                "start": 26,
                                "end": 28
                            },
                            "flags": 2048,
                            "start": 24,
                            "end": 28
                        },
                        "flags": 2048,
                        "start": 9,
                        "end": 28
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "class x {async arguments(){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

