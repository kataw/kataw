# Kataw parser test case

## Input

`````js
tag`some \" quote`;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "tag`some \\\" quote`;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66260,
                    "member": {
                        "kind": 196712,
                        "text": "tag",
                        "rawText": "tag",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 3
                    },
                    "typeArguments": null,
                    "template": {
                        "kind": 4260568,
                        "rawText": "some \\\" quote",
                        "text": "some \" quote",
                        "literal": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 3,
                        "end": 18
                    },
                    "optional": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 3,
                    "end": 18
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 19
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 19
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

