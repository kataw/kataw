# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: dynamic property
> :: case: async x => {}
## Input

`````js
async x => {}[foo]
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 7
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 12,
                        "end": 12
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 10,
                    "end": 13
                },
                "autofix": 0,
                "flags": 2304,
                "start": 0,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 81921,
                            "value": "foo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 14,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 17
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "async x => {}[foo]",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 29,
            "error": "Block body arrows can not be immediately invoked without a group",
            "start": 13,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 13,
            "end": 14
        }
    ],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: dynamic property
> :: case: async x => {}
## Input

`````js
async x => {}[foo]
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: dynamic property
> :: case: async x => {}
## Input

`````js
async x => {}[foo]
`````
```

