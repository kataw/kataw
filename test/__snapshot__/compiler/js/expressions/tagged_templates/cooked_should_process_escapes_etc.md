# Kataw parser test case

## Input

`````js
foo`H\x45Y`
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "foo`H\\x45Y`",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66260,
                "member": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "typeArguments": null,
                "template": {
                    "kind": 4260568,
                    "rawText": "H\\x45Y",
                    "text": "HEY",
                    "literal": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 3,
                    "end": 11
                },
                "optional": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 3,
                "end": 11
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

