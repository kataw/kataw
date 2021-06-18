# Kataw parser test case

## Input

`````js
foo;bar;
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
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 4,
                "end": 7
            },
            "flags": 16,
            "start": 4,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "foo;bar;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

foo;
bar;
```

### Diagnostics

```javascript
✔ No errors
```

