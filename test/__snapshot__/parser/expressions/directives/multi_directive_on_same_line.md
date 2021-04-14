# Kataw parser test case

## Input

`````js
"foo";"bar";
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
                "flags": 768,
                "start": 6,
                "end": 11
            },
            "flags": 128,
            "start": 6,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "\"foo\";\"bar\";",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

