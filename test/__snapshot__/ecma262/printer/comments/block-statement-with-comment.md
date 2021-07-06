# Kataw parser test case

## Input

`````js
/*1*/{/*2*/}


/*1*/{/*2*/}

// 3
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 21,
                "end": 21
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 12,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "/*1*/{/*2*/}\n\n\n/*1*/{/*2*/}\n\n// 3",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

{}
{}

```

### Diagnostics

```javascript
✔ No errors
```

