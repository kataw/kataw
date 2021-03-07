# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<em>
One
Two
Three
</em>
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<em>\nOne\nTwo\nThree\n</em>",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66175,
                    "openingElement": {
                        "kind": 4228,
                        "tagName": {
                            "kind": 129,
                            "text": "em",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 1,
                            "end": 3
                        },
                        "attributes": {
                            "kind": 123,
                            "attributesList": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 3,
                            "end": 3
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 0,
                        "end": 4
                    },
                    "children": {
                        "kind": 124,
                        "children": [
                            {
                                "kind": 137,
                                "text": "\nOne\nTwo\nThree\n",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "start": 4,
                                "end": 19
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 4,
                        "end": 19
                    },
                    "closingElement": {
                        "kind": 4221,
                        "tagName": {
                            "kind": 129,
                            "text": "em",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 21,
                            "end": 23
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 19,
                        "end": 24
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 24
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 24
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

