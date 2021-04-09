# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: super.foo
## Input

`````js
(class B extends super.foo {})
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
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "name": {
                        "kind": 81921,
                        "value": "B",
                        "autofix": 0,
                        "flags": 768,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 225,
                                "autofix": 0,
                                "flags": 768,
                                "start": 16,
                                "end": 22
                            },
                            "expression": {
                                "kind": 81921,
                                "value": "foo",
                                "autofix": 0,
                                "flags": 768,
                                "start": 23,
                                "end": 26
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 16,
                            "end": 26
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 26
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 28,
                        "end": 29
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "(class B extends super.foo {})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 22,
            "end": 23
        }
    ],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: super.foo
## Input

`````js
(class B extends super.foo {})
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: super.foo
## Input

`````js
(class B extends super.foo {})
`````
```

