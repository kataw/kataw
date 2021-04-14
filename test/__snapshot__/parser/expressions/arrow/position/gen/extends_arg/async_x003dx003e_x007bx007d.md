# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: extends arg
> :: case: async => {}
## Input

`````js
class A extends async => {} {}
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
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 21,
                        "end": 24
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 768,
                                "start": 15,
                                "end": 21
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 256,
                            "start": 15,
                            "end": 21
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 768,
                        "start": 15,
                        "end": 21
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 26,
                            "end": 26
                        },
                        "flags": 256,
                        "start": 24,
                        "end": 27
                    },
                    "flags": 2304,
                    "start": 15,
                    "end": 27
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 27
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 29,
                "end": 30
            },
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "class A extends async => {} {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: extends arg
> :: case: async => {}
## Input

`````js
class A extends async => {} {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: extends arg
> :: case: async => {}
## Input

`````js
class A extends async => {} {}
`````
```

