# Kataw parser test case

## Input

`````js
foo: do break foo; while(foo);
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
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 3,
                "end": 4
            },
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 7
                },
                "statement": {
                    "kind": 150,
                    "breakKeyword": {
                        "kind": 37757005,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 13
                    },
                    "label": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 17
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 18
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 24
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 28
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 4,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "foo: do break foo; while(foo);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
foo:  do  break foo;
while (foo);
```

### Diagnostics

```javascript
✔ No errors
```

