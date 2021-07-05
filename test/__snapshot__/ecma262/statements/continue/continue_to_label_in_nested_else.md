# Kataw parser test case

## Input

`````js
foo: while (true) if (x); else continue foo;
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
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "start": 4,
                    "end": 10
                },
                "expression": {
                    "kind": 24752947,
                    "flags": 96,
                    "start": 12,
                    "end": 16
                },
                "statement": {
                    "kind": 164,
                    "ifKeyword": {
                        "kind": 37757019,
                        "flags": 80,
                        "start": 17,
                        "end": 20
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 22,
                        "end": 23
                    },
                    "consequent": {
                        "kind": 168,
                        "flags": 16,
                        "start": 24,
                        "end": 25
                    },
                    "elseKeyword": {
                        "kind": 4194389,
                        "flags": 64,
                        "start": 25,
                        "end": 30
                    },
                    "alternate": {
                        "kind": 172,
                        "continueKeyword": {
                            "kind": 37757009,
                            "flags": 80,
                            "start": 30,
                            "end": 39
                        },
                        "label": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 39,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 30,
                        "end": 44
                    },
                    "flags": 80,
                    "start": 17,
                    "end": 44
                },
                "flags": 80,
                "start": 4,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "foo: while (true) if (x); else continue foo;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

foo:  while (true ) if (x);
  else  continue  foo;
```

### Diagnostics

```javascript
✔ No errors
```

