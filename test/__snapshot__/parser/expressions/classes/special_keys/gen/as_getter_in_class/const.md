# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as getter in class
> :: case: const
## Input

`````js
class x {get const(){}}
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
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 81921,
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
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "const",
                                "rawText": "const",
                                "flags": 768,
                                "start": 12,
                                "end": 18
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 8192,
                                "start": 19,
                                "end": 20
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
                                    "start": 21,
                                    "end": 21
                                },
                                "flags": 256,
                                "start": 20,
                                "end": 22
                            },
                            "flags": 8192,
                            "start": 18,
                            "end": 22
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 22
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "class x {get const(){}}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as getter in class
> :: case: const
## Input

`````js
class x {get const(){}}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: as getter in class
> :: case: const
## Input

`````js
class x {get const(){}}
`````
```

