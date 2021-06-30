# Kataw parser test case

## Options

`````js
{ impliedStrict: false }
`````

## Input

`````js
yi\u0065ld: 1;
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
                "text": "yield",
                "rawText": "yi\\u0065ld",
                "flags": 96,
                "start": 0,
                "end": 10
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 10,
                "end": 11
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "flags": 16,
                "start": 11,
                "end": 14
            },
            "flags": 16400,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "yi\\u0065ld: 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

yi\u0065ld: 1;

```

### Diagnostics

```javascript
✔ No errors
```

