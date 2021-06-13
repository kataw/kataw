# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
x = 0b89897kklb101b
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
                    "text": 0,
                    "rawText": "0b89897k",
                    "flags": 524384,
                    "start": 3,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "klb101b",
                "rawText": "klb101b",
                "flags": 96,
                "start": 12,
                "end": 19
            },
            "flags": 16,
            "start": 12,
            "end": 19
        }
    ],
    "isModule": true,
    "source": "x = 0b89897kklb101b",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binary integer literal like sequence containing an invalid digit - start: 6, end: 7
✖ Binary integer literal like sequence containing an invalid digit - start: 7, end: 8
✖ Binary integer literal like sequence containing an invalid digit - start: 8, end: 9
✖ Binary integer literal like sequence containing an invalid digit - start: 9, end: 10
✖ Binary integer literal like sequence containing an invalid digit - start: 10, end: 11
✖ An identifier or keyword cannot immediately follow a numeric literal - start: 3, end: 11
✖ Expected a `;` - start: 12, end: 19

```

