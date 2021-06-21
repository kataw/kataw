# Kataw parser test case

## Input

`````js
switch(y&[]=y){}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 7,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 134252103,
                    "flags": 96,
                    "start": 8,
                    "end": 9
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 32,
                        "start": 9,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 11,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 12,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 13
                },
                "flags": 32,
                "start": 7,
                "end": 13
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 14,
                "end": 16
            },
            "flags": 80,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "switch(y&[]=y){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

 switch(y => []=y) {
} 
```

### Diagnostics

```javascript
✔ No errors
```

