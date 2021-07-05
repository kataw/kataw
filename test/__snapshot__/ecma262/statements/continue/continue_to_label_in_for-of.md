# Kataw parser test case

## Input

`````js
foo: for (x of y) continue foo;
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
                "kind": 167,
                "forKeyword": {
                    "kind": 37757017,
                    "flags": 80,
                    "start": 4,
                    "end": 8
                },
                "awaitKeyword": null,
                "initializer": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 10,
                    "end": 11
                },
                "ofKeyword": {
                    "kind": 16793717,
                    "flags": 64,
                    "start": 11,
                    "end": 14
                },
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "statement": {
                    "kind": 172,
                    "continueKeyword": {
                        "kind": 37757009,
                        "flags": 80,
                        "start": 17,
                        "end": 26
                    },
                    "label": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 26,
                        "end": 30
                    },
                    "flags": 16,
                    "start": 17,
                    "end": 31
                },
                "flags": 80,
                "start": 4,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "foo: for (x of y) continue foo;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

foo:  for (x of y)
  continue  foo;
```

### Diagnostics

```javascript
✔ No errors
```

