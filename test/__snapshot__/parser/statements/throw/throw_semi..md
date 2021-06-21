# Kataw parser test case

## Input

`````js
throw foo;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 158,
            "throwKeyword": {
                "kind": 37757026,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 5,
                "end": 9
            },
            "flags": 80,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "throw foo;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

 throw foo; 
```

### Diagnostics

```javascript
✔ No errors
```

