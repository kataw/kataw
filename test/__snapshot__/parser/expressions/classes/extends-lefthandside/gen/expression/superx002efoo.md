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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 0,
                            "start": 8,
                            "end": 16
                        },
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 225,
                                "superKeyword": {
                                    "kind": 4259935,
                                    "flags": 0,
                                    "start": 16,
                                    "end": 22
                                },
                                "flags": 96,
                                "start": 16,
                                "end": 22
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 23,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 26
                        },
                        "typeParameter": null,
                        "flags": 16,
                        "start": 16,
                        "end": 26
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 32,
                        "start": 28,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 29
                },
                "flags": 32,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "(class B extends super.foo {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 22, end: 23

```

