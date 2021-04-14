# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: dynamic property
> :: case: async => {}
## Input

`````js
async => {}[foo]
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
                "kind": 130,
                "member": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 5,
                        "end": 8
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
                                "start": 0,
                                "end": 5
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 256,
                            "start": 0,
                            "end": 5
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 768,
                        "start": 0,
                        "end": 5
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
                            "start": 10,
                            "end": 10
                        },
                        "flags": 256,
                        "start": 8,
                        "end": 11
                    },
                    "flags": 2304,
                    "start": 0,
                    "end": 11
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 12,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "async => {}[foo]",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 29,
            "error": "Block body arrows can not be immediately invoked without a group",
            "start": 11,
            "end": 12
        }
    ],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: dynamic property
> :: case: async => {}
## Input

`````js
async => {}[foo]
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: dynamic property
> :: case: async => {}
## Input

`````js
async => {}[foo]
`````
```

