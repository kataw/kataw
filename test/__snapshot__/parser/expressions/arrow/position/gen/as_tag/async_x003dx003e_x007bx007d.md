# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: as tag
> :: case: async => {}
## Input

`````js
async => {}`foo`
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
                "kind": 226,
                "member": {
                    "kind": 271,
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 81921,
                                "value": "async",
                                "autofix": 0,
                                "flags": 768,
                                "start": 0,
                                "end": 5
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 0,
                            "end": 5
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
                            "start": 10,
                            "end": 10
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 11
                    },
                    "autofix": 0,
                    "flags": 2304,
                    "start": 0,
                    "end": 11
                },
                "template": {
                    "kind": 458761,
                    "rawText": "foo",
                    "text": "foo",
                    "autofix": 0,
                    "flags": 256,
                    "start": 11,
                    "end": 16
                },
                "optional": false,
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "async => {}`foo`",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 30,
            "error": "Block body arrows can not be immediately tagged without a group",
            "start": 11,
            "end": 16
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
- Path: g
> :: test: as tag
> :: case: async => {}
## Input

`````js
async => {}`foo`
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: as tag
> :: case: async => {}
## Input

`````js
async => {}`foo`
`````
```

