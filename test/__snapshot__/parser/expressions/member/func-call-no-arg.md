# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
foo.bar
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
                "kind": 129,
                "member": {
                    "kind": 134299649,
                    "original": "foo",
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 134299649,
                    "original": "bar",
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 4,
                    "end": 7
                },
                "flags": 32,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "foo.bar",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
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

