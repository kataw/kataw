# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
"\
"
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
                "text": "",
                "rawText": "",
                "flags": 768,
                "start": 0,
                "end": 4
            },
            "flags": 128,
            "start": 0,
            "end": 4
        }
    ],
    "isModule": false,
    "text": "\"\\\n\"",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 4
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

