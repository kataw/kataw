# Kataw parser test case

## Input

`````js
for/*1*/(/*2*/;


/*3*/

;


/*4*/


);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 38,
                "end": 39
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "for/*1*/(/*2*/;\n\n\n/*3*/\n\n;\n\n\n/*4*/\n\n\n);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
for (;;);
```

### Diagnostics

```javascript
✔ No errors
```

