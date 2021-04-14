# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: postfix update
> :: case: async async => {}
## Input

`````js
async async => {}++
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 11,
                    "end": 14
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
                            "start": 5,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 0,
                        "end": 11
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
                        "start": 16,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 14,
                    "end": 17
                },
                "flags": 2304,
                "start": 0,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 768,
                    "start": 17,
                    "end": 19
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 19,
                    "end": 19
                },
                "flags": 256,
                "start": 17,
                "end": 19
            },
            "flags": 128,
            "start": 17,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "async async => {}++",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 19,
            "end": 19
        }
    ],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: postfix update
> :: case: async async => {}
## Input

`````js
async async => {}++
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: postfix update
> :: case: async async => {}
## Input

`````js
async async => {}++
`````
```

