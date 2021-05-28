# Kataw parser test case

## Input

`````js
foo?.#bar;

foo?.x?.#bar;
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 0,
                    "start": 3,
                    "end": 5
                },
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67174651,
                            "text": "#bar",
                            "flags": 96,
                            "start": 5,
                            "end": 9
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 0,
                    "start": 18,
                    "end": 20
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 15,
                        "end": 17
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 10,
                        "end": 15
                    },
                    "chain": {
                        "kind": 206,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 17,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 18
                        },
                        "flags": 32,
                        "start": 17,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 18
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 536871114,
                        "chain": null,
                        "expression": {
                            "kind": 67174651,
                            "text": "#bar",
                            "flags": 96,
                            "start": 20,
                            "end": 24
                        },
                        "flags": 32,
                        "start": 20,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 24
                },
                "flags": 32,
                "start": 10,
                "end": 24
            },
            "flags": 16,
            "start": 10,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "foo?.#bar;\n\nfoo?.x?.#bar;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class_bodies - start: 5, end: 9
✖ Private identifiers are not allowed outside class_bodies - start: 20, end: 24

```

