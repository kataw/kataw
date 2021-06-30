# Kataw parser test case

## Input

`````js
foo: do continue foo; while(true)
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 0,
                "end": 3
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 3,
                "end": 4
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "start": 4,
                    "end": 7
                },
                "statement": {
                    "kind": 172,
                    "continueKeyword": {
                        "kind": 37757009,
                        "flags": 80,
                        "start": 7,
                        "end": 16
                    },
                    "label": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 16,
                        "end": 20
                    },
                    "flags": 16,
                    "start": 7,
                    "end": 21
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 64,
                    "start": 21,
                    "end": 27
                },
                "expression": {
                    "kind": 24752947,
                    "flags": 96,
                    "start": 28,
                    "end": 32
                },
                "flags": 80,
                "start": 4,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "foo: do continue foo; while(true)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

foo: do
  continue foo; while (true)

```

### Diagnostics

```javascript
✔ No errors
```

