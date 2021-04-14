# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: super.foo
## Input

`````js
new super.foo
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
                "kind": 129,
                "member": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 4259933,
                        "flags": 768,
                        "start": 0,
                        "end": 3
                    },
                    "expression": {
                        "kind": 225,
                        "superKeyword": {
                            "kind": 4259935,
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "flags": 768,
                        "start": 3,
                        "end": 9
                    },
                    "argumentList": null,
                    "flags": 256,
                    "start": 0,
                    "end": 9
                },
                "expression": {
                    "kind": 81921,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 10,
                    "end": 13
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "new super.foo",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 9,
            "end": 10
        }
    ],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: super.foo
## Input

`````js
new super.foo
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: super.foo
## Input

`````js
new super.foo
`````
```

