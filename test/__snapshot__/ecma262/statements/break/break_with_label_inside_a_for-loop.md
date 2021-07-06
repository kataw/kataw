# Kataw parser test case

## Input

`````js
foo: for (;;) break foo
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
                "kind": 165,
                "forKeyword": {
                    "kind": 37757017,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 8
                },
                "initializer": null,
                "condition": null,
                "incrementor": null,
                "statement": {
                    "kind": 150,
                    "breakKeyword": {
                        "kind": 37757005,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 19
                    },
                    "label": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 23
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 23
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 4,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "foo: for (;;) break foo",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

foo:  for (;;)
  break  foo;
```

### Diagnostics

```javascript
✔ No errors
```

