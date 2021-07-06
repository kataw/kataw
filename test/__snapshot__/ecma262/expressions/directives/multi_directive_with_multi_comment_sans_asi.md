# Kataw parser test case

## Input

`````js
"foo";/*abc
xyz*/"bar";
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
                "kind": 201392131,
                "text": "foo",
                "rawText": "\"foo\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "\"bar\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 6,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 6,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "\"foo\";/*abc\nxyz*/\"bar\";",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

"\"foo\"";
"\"bar\"";

```

### Diagnostics

```javascript
✔ No errors
```

