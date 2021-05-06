# Kataw parser test case

## Input

`````js
if(0) break;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 3,
                "end": 4
            },
            "consequent": {
                "kind": 150,
                "breakKeyword": {
                    "kind": 37757005,
                    "flags": 0,
                    "start": 5,
                    "end": 11
                },
                "label": null,
                "flags": 16,
                "start": 5,
                "end": 12
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "if(0) break;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A 'break' statement can only be used within an enclosing iteration or switch statement. - start: 11, end: 12

```

