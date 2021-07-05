# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
x = 0bxxxxxxxxx19;
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "0bxxxxxxxxx19",
                    "flags": 524384,
                    "start": 3,
                    "end": 17
                },
                "flags": 0,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": true,
    "source": "x = 0bxxxxxxxxx19;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 6, end: 7
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 7, end: 8
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 8, end: 9
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 9, end: 10
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 10, end: 11
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 11, end: 12
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 12, end: 13
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 13, end: 14
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 14, end: 15
✖ Binary integer literal like sequence containing an invalid digit - start: 16, end: 17

```

