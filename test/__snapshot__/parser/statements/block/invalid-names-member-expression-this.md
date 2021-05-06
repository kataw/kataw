# Kataw parser test case

## Input

`````js
{ this.#x }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 135,
                                "flags": 96,
                                "start": 1,
                                "end": 6
                            },
                            "expression": {
                                "kind": 67174651,
                                "text": "#x",
                                "flags": 96,
                                "start": 7,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 9
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "{ this.#x }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

{
  this.;
}
```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class_bodies - start: 7, end: 9

```

