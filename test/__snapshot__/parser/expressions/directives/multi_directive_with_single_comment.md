# Kataw parser test case

## Input

`````js
"foo"
// stuff here
"bar";
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
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "\"bar\"",
                "flags": 97,
                "start": 5,
                "end": 25
            },
            "flags": 16,
            "start": 5,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "\"foo\"\n// stuff here\n\"bar\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

