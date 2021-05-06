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

### CST

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
                        "flags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "start": 0,
                        "end": 5
                    },
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
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
                            "flags": 32,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 32,
                        "start": 8,
                        "end": 11
                    },
                    "flags": 288,
                    "start": 0,
                    "end": 11
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 12,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "async => {}[foo]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Block body arrows can not be immediately invoked without a group - start: 11, end: 12

```

