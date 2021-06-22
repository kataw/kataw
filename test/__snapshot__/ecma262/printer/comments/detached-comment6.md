# Kataw parser test case

## Input

`````js
// detached comment 1




  x;




/* detached comment 2 */

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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "// detached comment 1\n\n\n\n\n  x;\n\n\n\n\n/* detached comment 2 */\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
// detached comment 1

x;
```

### Diagnostics

```javascript
✔ No errors
```

