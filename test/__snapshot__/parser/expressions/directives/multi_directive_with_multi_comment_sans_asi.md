# Kataw parser test case

## Input

`````js
"foo";/*abc
xyz*/"bar";
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "bar",
                "rawText": "bar",
                "flags": 769,
                "start": 6,
                "end": 22
            },
            "flags": 128,
            "start": 6,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "\"foo\";/*abc\nxyz*/\"bar\";",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

